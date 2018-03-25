package konra.sabtx;

import io.reactivex.Observable;
import konra.sabtx.model.Card;
import konra.sabtx.model.Hand;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.annotation.PostConstruct;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class RxController {

    SseEmitter emitter;

    @PostConstruct
    void init() {
        emitter = new SseEmitter();
        ScheduledExecutorService exec = Executors.newScheduledThreadPool(10);
        exec.scheduleAtFixedRate(this::emitEvent, 2, 4, TimeUnit.SECONDS);
    }

    @RequestMapping("/events")
    public SseEmitter events() {
        return emitter;
    }

    @SneakyThrows
    void emitEvent() {

        Hand hand = new Hand();

        Observable.range(0, 5).subscribe(num -> {
            Card c = new Card();
            c.setColor(Math.random() > 0.5 ? "black" : "red");
            c.setValue( (int) Math.floor(Math.random() * 13 + 1));
            hand.getCards().add(c);
        });

        emitter.send(hand);
    }
}
