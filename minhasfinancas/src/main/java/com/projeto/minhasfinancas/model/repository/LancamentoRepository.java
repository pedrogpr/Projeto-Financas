package com.projeto.minhasfinancas.model.repository;

import com.projeto.minhasfinancas.model.entity.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {
}
