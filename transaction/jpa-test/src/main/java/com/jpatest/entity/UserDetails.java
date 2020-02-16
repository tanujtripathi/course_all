package com.jpatest.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDetails {

    @Id
    @GeneratedValue
    private int userId;
    private String userName;

    @OneToMany(cascade = CascadeType.ALL)
    private Collection<UserVehicle> vehicle = new ArrayList<>();


   /* @OneToMany
    @JoinTable(name = "USER_VEHICLE", joinColumns = @JoinColumn(name = "USER_ID"), inverseJoinColumns = @JoinColumn(name = "VEHICLE_ID"))
    private Collection<Vehicle> vehicle = new ArrayList<Vehicle>();
*/

}
