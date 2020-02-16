package com.jpatest.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "some")
public class SomeEntity {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "name")
    private String name;
}
