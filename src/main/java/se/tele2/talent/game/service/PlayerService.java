package se.tele2.talent.game.service;

import org.springframework.stereotype.Service;
import se.tele2.talent.game.controller.model.Player;
import se.tele2.talent.game.repository.PlayerRepository;

import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public void savePlayer(Player player) {
        playerRepository.save(player);
    }

    public Optional<Player> getPlayer(Long id) {
        return playerRepository.findById(id);
    }
}
