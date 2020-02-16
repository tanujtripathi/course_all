package com.jpatest.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employeId")
    private int employeId;

    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Vehicle> vehicles = new ArrayList<>();

}
