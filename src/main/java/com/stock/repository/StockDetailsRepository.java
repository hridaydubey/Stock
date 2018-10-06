package com.stock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stock.entity.StockDetails;

/**
 * @author Hriday Dueby
 *
 */
public interface StockDetailsRepository extends JpaRepository<StockDetails, Long> {
	
}
