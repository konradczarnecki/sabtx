package konra.sabtx.user;

import konra.sabtx.model.TokenDto;
import konra.sabtx.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@Slf4j
public class UserController {

    @RequestMapping("/token")
    public TokenDto login(@RequestBody User user) {

        log.info(user.toString());

        TokenDto tokens = new TokenDto();
        tokens.setAccessToken("token" + new Date().getTime());
        tokens.setRefreshToken("refresh_token" + new Date().getTime());

        return tokens;
    }
}
