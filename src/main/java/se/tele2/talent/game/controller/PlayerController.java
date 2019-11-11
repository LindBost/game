package se.tele2.talent.game.controller;

import org.springframework.web.bind.annotation.*;
import se.tele2.talent.game.controller.model.Player;
import se.tele2.talent.game.service.PlayerService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/player")
public class PlayerController {

    private final PlayerService playerService;


    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping
    public Player savePlayer(@RequestBody Player player) {
        return playerService.savePlayer(player);
    }

    @GetMapping("/{id}")
    public Optional<Player> getPlayer(@PathVariable Long id) {
        return playerService.getPlayer(id);
    }

    @GetMapping
    public List<Player> getAll(){

        return playerService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable Long id){
        playerService.deletePlayer(id);
    }

}
