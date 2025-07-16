package no.glimt

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GlimtApplication

fun main(args: Array<String>) {
	runApplication<GlimtApplication>(*args)
}
