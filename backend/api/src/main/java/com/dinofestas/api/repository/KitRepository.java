package com.dinofestas.api.repository;

import com.dinofestas.api.model.Kit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KitRepository extends JpaRepository<Kit, Long> {
  List<Kit> findByNomeContainingIgnoreCase(String nome);
}