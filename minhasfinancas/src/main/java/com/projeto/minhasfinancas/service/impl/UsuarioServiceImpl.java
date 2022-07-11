package com.projeto.minhasfinancas.service.impl;

import com.projeto.minhasfinancas.model.entity.Usuario;
import com.projeto.minhasfinancas.model.repository.UsuarioRepository;
import com.projeto.minhasfinancas.service.UsuarioService;

public class UsuarioServiceImpl implements UsuarioService {

    private UsuarioRepository repository;

    @Override
    public Usuario autenticar(String email, String senha) {
        return null;
    }

    @Override
    public Usuario salvarUsuario(Usuario usuario) {
        return null;
    }

    @Override
    public void validarEmail(String email) {

    }
}
