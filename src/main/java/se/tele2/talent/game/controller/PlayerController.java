package se.tele2.talent.game.controller;

import org.springframework.web.bind.annotation.*;
import se.tele2.talent.game.controller.model.Player;
import se.tele2.talent.game.service.PlayerService;

import java.util.Optional;

@RestController
@RequestMapping(value = "/player")
public class PlayerController {

    private final PlayerService playerService;


    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping
    public void savePlayer(@RequestBody Player player) {
        playerService.savePlayer(player);
    }

    @GetMapping("/{id}")
    public Optional<Player> getPlayer(@PathVariable Long id) {
        return playerService.getPlayer(id);
    }

}
