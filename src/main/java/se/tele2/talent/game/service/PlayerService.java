package se.tele2.talent.game.service;

import org.springframework.stereotype.Service;
import se.tele2.talent.game.controller.model.Player;
import se.tele2.talent.game.exception.PlayerNotFoundException;
import se.tele2.talent.game.repository.PlayerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player savePlayer(Player player) {
        return playerRepository.save(player);
    }

    public Optional<Player> getPlayer(Long id) {
        return playerRepository.findById(id);
    }

    public List<Player> getAll() {
        return playerRepository.findAll();
    }

    public void deletePlayer(Long id) {
        playerRepository.delete(playerRepository.findById(id).orElseThrow( () -> new PlayerNotFoundException("Player not found")));
    }
}
