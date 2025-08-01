package com.example.ecom.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "secret_key";

    public String generateToken(Long id) {
        return JWT.create()
                .withSubject(String.valueOf(id))
                .sign(Algorithm.HMAC256(SECRET_KEY));
    }

    public Long validateTokenAndGetUserId(String token) {
        DecodedJWT decoded = JWT.require(Algorithm.HMAC256(SECRET_KEY))
                .build()
                .verify(token);
        return Long.parseLong(decoded.getSubject());
    }
}
