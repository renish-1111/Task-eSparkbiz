const mysql = require('mysql2/promise');

async function bulkInsertStudents() {
    const config = {
        host: 'localhost',
        user: 'root',
        password: 'root', 
        database: 'db_student'
    };

    const firstNames = [
        {n:'James', g:1}, {n:'Mary', g:0}, {n:'Robert', g:1}, {n:'Patricia', g:0}, {n:'John', g:1}, {n:'Jennifer', g:0}, {n:'Michael', g:1}, {n:'Linda', g:0}, {n:'David', g:1}, {n:'Elizabeth', g:0},
        {n:'William', g:1}, {n:'Barbara', g:0}, {n:'Richard', g:1}, {n:'Susan', g:0}, {n:'Joseph', g:1}, {n:'Jessica', g:0}, {n:'Thomas', g:1}, {n:'Sarah', g:0}, {n:'Christopher', g:1}, {n:'Karen', g:0},
        {n:'Charles', g:1}, {n:'Lisa', g:0}, {n:'Daniel', g:1}, {n:'Nancy', g:0}, {n:'Matthew', g:1}, {n:'Betty', g:0}, {n:'Anthony', g:1}, {n:'Margaret', g:0}, {n:'Mark', g:1}, {n:'Sandra', g:0},
        {n:'Donald', g:1}, {n:'Ashley', g:0}, {n:'Steven', g:1}, {n:'Kimberly', g:0}, {n:'Paul', g:1}, {n:'Emily', g:0}, {n:'Andrew', g:1}, {n:'Donna', g:0}, {n:'Joshua', g:1}, {n:'Michelle', g:0},
        {n:'Kenneth', g:1}, {n:'Dorothy', g:0}, {n:'Kevin', g:1}, {n:'Carol', g:0}, {n:'Brian', g:1}, {n:'Amanda', g:0}, {n:'George', g:1}, {n:'Melissa', g:0}, {n:'Timothy', g:1}, {n:'Deborah', g:0},
        {n:'Ronald', g:1}, {n:'Stephanie', g:0}, {n:'Edward', g:1}, {n:'Rebecca', g:0}, {n:'Jason', g:1}, {n:'Sharon', g:0}, {n:'Jeffrey', g:1}, {n:'Laura', g:0}, {n:'Ryan', g:1}, {n:'Cynthia', g:0},
        {n:'Jacob', g:1}, {n:'Kathleen', g:0}, {n:'Gary', g:1}, {n:'Amy', g:0}, {n:'Nicholas', g:1}, {n:'Shirley', g:0}, {n:'Eric', g:1}, {n:'Angela', g:0}, {n:'Jonathan', g:1}, {n:'Helen', g:0},
        {n:'Stephen', g:1}, {n:'Anna', g:0}, {n:'Larry', g:1}, {n:'Brenda', g:0}, {n:'Justin', g:1}, {n:'Pamela', g:0}, {n:'Scott', g:1}, {n:'Nicole', g:0}, {n:'Brandon', g:1}, {n:'Emma', g:0},
        {n:'Benjamin', g:1}, {n:'Samantha', g:0}, {n:'Samuel', g:1}, {n:'Katherine', g:0}, {n:'Gregory', g:1}, {n:'Christine', g:0}, {n:'Alexander', g:1}, {n:'Debra', g:0}, {n:'Frank', g:1}, {n:'Rachel', g:0},
        {n:'Patrick', g:1}, {n:'Catherine', g:0}, {n:'Raymond', g:1}, {n:'Carolyn', g:0}, {n:'Jack', g:1}, {n:'Janet', g:0}, {n:'Dennis', g:1}, {n:'Ruth', g:0}, {n:'Jerry', g:1}, {n:'Maria', g:0}
    ];

    const lastNames = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
        'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
        'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
        'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
        'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts',
        'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes',
        'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper',
        'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson',
        'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennett', 'Gray', 'Mendoza', 'Ruiz', 'Hughes',
        'Price', 'Alvarez', 'Castillo', 'Sanders', 'Patel', 'Myers', 'Long', 'Ross', 'Foster', 'Jimenez'
    ];

    const streetNames = ['Oak', 'Maple', 'Washington', 'Lake', 'Park', 'Hill', 'Sunset', 'Highland', 'Lincoln', 'Cherry'];
    const streetTypes = ['St', 'Ave', 'Blvd', 'Rd', 'Ln', 'Dr'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

    const values = [];
    let counter = 1;

    // Data Generation Logic
    for (let f of firstNames) {
        for (let l of lastNames) {
            const fullName = `${f.n} ${l}`;
            const email = `${f.n.toLowerCase()}.${l.toLowerCase()}.${counter}@example.com`;
            const phone = Math.floor(6000000000 + Math.random() * 3999999999).toString();
            
            // Realistic Address
            const houseNum = Math.floor(Math.random() * 8500) + 101;
            const street = streetNames[Math.floor(Math.random() * streetNames.length)];
            const type = streetTypes[Math.floor(Math.random() * streetTypes.length)];
            const fullAddress = `${houseNum} ${street} ${type}`;
            
            const city = cities[Math.floor(Math.random() * cities.length)];

            // Realistic DOB (Ages 18 to 25 from current year 2026)
            const year = 2026 - (Math.floor(Math.random() * 8) + 18);
            const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
            const dob = `${year}-${month}-${day}`;

            values.push([fullName, email, phone, fullAddress, city, dob, f.g]);
            counter++;
        }
    }

    const conn = await mysql.createConnection(config);

    try {
        console.log("Dropping old table and recreating with City column...");
        await conn.query("DROP TABLE IF EXISTS student");
        await conn.query(`
            CREATE TABLE student (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                phone VARCHAR(10) NOT NULL,
                address VARCHAR(255) NOT NULL,
                city VARCHAR(100) NOT NULL,
                dob DATE NOT NULL,
                gender TINYINT NOT NULL COMMENT "0=female,1=male",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT chk_phone CHECK (LENGTH(phone) = 10),
                CONSTRAINT chk_gender CHECK (gender IN (0,1))
            )
        `);

        const chunkSize = 2000;
        for (let i = 0; i < values.length; i += chunkSize) {
            const chunk = values.slice(i, i + chunkSize);
            await conn.query("INSERT INTO student (name, email, phone, address, city, dob, gender) VALUES ?", [chunk]);
            console.log(`Inserted ${i + chunk.length} records...`);
        }
        console.log("Bulk insert complete with realistic data.");
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await conn.end();
    }
}

bulkInsertStudents();