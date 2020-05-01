import {CharsCollection} from './src/CharsCollection'
import {LinkedList} from './src/LinkedList'
import {NumbersCollection} from './src/NumbersCollection'

const charsCollection = new CharsCollection('amGgggorb80')
charsCollection.sort()

charsCollection.prettyPrint()

const numbersCollection = new NumbersCollection([-1, 2, 25, 15, 5])
numbersCollection.sort()

numbersCollection.prettyPrint()

const linkedList = new LinkedList()
linkedList.add(-1, -75, 25, 15, 5)
linkedList.sort()

linkedList.prettyPrint()
