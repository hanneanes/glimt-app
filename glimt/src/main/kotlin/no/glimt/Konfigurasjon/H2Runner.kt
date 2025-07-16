import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import java.sql.DriverManager

@Component
class H2Runner : CommandLineRunner {
    override fun run(vararg args: String?) {
        val connection = DriverManager.getConnection("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1")
        val statement = connection.createStatement()
        statement.execute("CREATE TABLE users(id INT PRIMARY KEY, name VARCHAR(255))")
        statement.execute("INSERT INTO users VALUES(1, 'Alice')")
        val rs = statement.executeQuery("SELECT * FROM users")
        while (rs.next()) {
            println("User: ${rs.getInt("id")}, ${rs.getString("name")}")
        }
        connection.close()
    }
}