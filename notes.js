// Use force: true to drop and recreate everything.
// Use alter: true to adjust existing tables.

// force: true
// → Drops all tables and recreates them. Deletes data.

// force: false (default)
// → Creates tables if they don’t exist. Doesn’t change or delete anything.

// alter: true
// → Updates existing tables to match model definitions. Keeps data.

// alter: false (default)
// → No table changes. Same as force: false unless used with force.