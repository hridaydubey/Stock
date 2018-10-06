package com.stock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stock.entity.AppUser;

/**
 * @author Hriday Dueby
 *
 */
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
	public AppUser findOneByUsername(String username);
}
