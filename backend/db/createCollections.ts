import { Collection, Db } from 'mongodb';

export async function createCustomersCollection(db: Db): Promise<Collection<any>> {
  const customersCollection = await db.createCollection('customers', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['balance', 'age', 'name', 'gender', 'company', 'email', 'phone', 'address'],
        properties: {
          index: {
            bsonType: 'int',
            minimum: 0
          },
          guid: {
            bsonType: 'string'
          },
          isActive: {
            bsonType: 'bool'
          },
          balance: {
            bsonType: 'int'
          },
          age: {
            bsonType: 'int'
          },
          name: {
            bsonType: 'string'
          },
          gender: {
            enum: ['male', 'female']
          },
          company: {
            bsonType: 'string'
          },
          email: {
            bsonType: 'string'
          },
          phone: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'string'
          },
          registered: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  return customersCollection;
}

export async function createSequenceCollection(db: Db): Promise<Collection<any>> {
  const sequenceCollection = await db.createCollection('sequence', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        properties: {
          sequenceReference: {
            bsonType: 'string'
          },
          sequenceNumber: {
            bsonType: 'int'
          }
        }
      }
    }
  });

  return sequenceCollection;
}
