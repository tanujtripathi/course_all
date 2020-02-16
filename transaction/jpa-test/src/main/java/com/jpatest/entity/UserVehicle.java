package com.jpatest.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserVehicle {

    @Id
    @GeneratedValue
    private int vehicleId;
    private String vehicleName;

    @ManyToOne
    @JoinColumn(name="userId")
    private UserDetails user;

}
