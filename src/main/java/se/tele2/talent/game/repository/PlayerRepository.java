package se.tele2.talent.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.tele2.talent.game.controller.model.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
}
