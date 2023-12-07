const client = require('./client');

// drop tables for video games and board games
async function dropTables() {
    try {
        console.log('Dropping All Tables...');
        await client.query(`
      DROP TABLE IF EXISTS videoGames;
      DROP TABLE IF EXISTS boardGames;
    `);
    } catch (error) {
        throw error;
    }
}

// build tables for video games and board games
async function createTables() {
    try {
        console.log('Building All Tables...');
        await client.query(`
      CREATE TABLE videoGames (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        "inStock" BOOLEAN DEFAULT false,
        "isPopular" BOOLEAN DEFAULT false,
        "imgUrl" VARCHAR(255) DEFAULT 'https://i.imgur.com/3J3wW9S.png'
        );
        CREATE TABLE boardGames (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            description TEXT NOT NULL,
            price INTEGER NOT NULL,
            "inStock" BOOLEAN DEFAULT false,
            "isPopular" BOOLEAN DEFAULT false,
            "imgUrl" VARCHAR(255) DEFAULT 'https://i.imgur.com/3J3wW9S.png'
            );
        `);
    } catch (error) {
        throw error;
    }
}

// create initial data for video games and board games
async function createInitialData() {
    try {
        console.log('Creating Initial Data...');
        await client.query(`
      INSERT INTO videoGames (name, description, price, "inStock", "isPopular", "imgUrl")
      VALUES
        ('Final Fantasy VII', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy VIII', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy IX', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy X', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy X-2', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy XII', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy XIII', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy XIV', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy XV', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy Tactics', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy Tactics: The War of the Lions', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy Tactics Advance', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy Tactics A2: Grimoire of the Rift', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
        ('Final Fantasy Crystal Chronicles', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png')`
        );
        await client.query(`
        INSERT INTO boardGames (name, description, price, "inStock", "isPopular", "imgUrl")
        VALUES
            ('Catan', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Ticket to Ride', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Pandemic', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Codenames', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Scrabble', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Monopoly', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Clue', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Risk', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Battleship', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Sorry!', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Chess', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Checkers', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Backgammon', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png'),
            ('Go', 'The best game ever!', 100, true, true, 'https://i.imgur.com/3J3wW9S.png')`
        );
    } catch (error) {
        throw error;
    }
}

// build all tables and create initial data
async function rebuildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialData();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    rebuildDB
};