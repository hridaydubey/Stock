package com.stock.entity;



import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Model class for application user
 *
 * @author Hriday Dueby
 *
 */
@Entity
@Table (name = "stock_details")
public class StockDetails {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Getter
    @Setter
    private String Name;
    @Getter
    @Setter
    private String Discription;
    @Getter
    @Setter
    private Double Price;

}
