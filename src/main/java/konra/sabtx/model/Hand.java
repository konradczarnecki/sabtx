package konra.sabtx.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.List;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Getter
@Setter
public class Hand {
    List<Card> cards;

    public Hand() {
        cards = new ArrayList<>();
    }
}
