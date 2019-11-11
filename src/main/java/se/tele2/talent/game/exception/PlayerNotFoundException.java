package se.tele2.talent.game.exception;

public class PlayerNotFoundException extends RuntimeException{
    public PlayerNotFoundException(String message){
        super(message);
    }
}
