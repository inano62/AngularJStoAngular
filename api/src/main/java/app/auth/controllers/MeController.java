package app.auth.controllers;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class MeController {

    @GetMapping("/api/auth/me")
    public Map<String, Object> me(@AuthenticationPrincipal(expression="username") String username) {
        return Map.of("username", username);
    }
}
