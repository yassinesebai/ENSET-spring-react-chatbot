package dev.mmourouh.ragchatbot;

import dev.mmourouh.ragchatbot.entities.Person;
import dev.mmourouh.ragchatbot.repositories.PersonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
@Theme("my-theme")
public class RagChatbotApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(RagChatbotApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(PersonRepository personRepository) {
        return args -> {
            Stream.of("Mohamed", "Rida", "Ahmed", "Alexandre", "Cecile").forEach(name -> {
                Person person = Person.builder()
                        .name(name)
                        .email(name + "@gmail.com")
                        .build();
                //personRepository.save(person);
            });
        };
    }
}
