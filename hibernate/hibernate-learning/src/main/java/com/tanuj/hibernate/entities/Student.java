package com.tanuj.hibernate.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    /**
     * It will create the Table named image
     * `image` table will have the column named `student_id`
     * `student_id` will be joined to `id` of `student` table
     */
    @ElementCollection  // It is similar to @oneToMany,
    @CollectionTable(name = "image")
    @OrderColumn
    @Column(name = "file_name")
    private Set<String> images = new HashSet<>();

    public Student(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.images = images;
    }
}