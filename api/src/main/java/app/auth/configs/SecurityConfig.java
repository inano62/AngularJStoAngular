package app.auth.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Cookie運用するなら CORS + credentials は必須
                .cors(Customizer.withDefaults())

                // まずは開発優先でOFF（後でCSRFトークン方式に戻せる）
                .csrf(csrf -> csrf.disable())

                // Basic認証は不要（これが今出てるWWW-Authenticateの元）
                .httpBasic(httpBasic -> httpBasic.disable())

                // セッションを使う（JSESSIONID）
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED))

                // 認可ルール
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/login", "/api/auth/logout").permitAll()
                        .anyRequest().authenticated()
                );

        return http.build();
    }
}
