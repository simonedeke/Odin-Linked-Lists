import {newNode} from "./newNode.js";

export const LinkedList = () => {
    
    let _tail = null;
    let _head = null;
    let _size = 0;

    function append(node){
        (_head == null) ? _head= node : _tail.nextNode = node;
        _tail = node;  
        _size++;      
    }
    function prepend(node){
        (_head == null) ? _head= node : _head.nextNode = _head;
        _head = node;  
        _size++;      
    }
    function size(){
        return _size;
    }
    function head(){
        return _head;
    }
    function tail(){
        return _tail;
    }
    function at(index){
        if(index >= _size){
            return null;
        }
        else {
            let before = _head
            let nxt = _head;
            for(let i = 0; i <= index; i++) {
                nxt = before;
                before = nxt.nextNode;
            }
            return nxt;
        }
        
    }
    function pop(){
        if(_head == null){
            return null;
        }
        else if (_head == _tail) {
            let tmp = _head;
            _head = null;
            _tail = null;
            _size = 0;
            return tmp;
        }
        else {
            let before = _head
            let nxt = _head;
            while(before.nextNode){
                nxt = before;
                before = nxt.nextNode;
            }
            _tail = nxt;
            _tail.nextNode = null;
            _size--;
            return before;
        }
    }
    function contains(value){
        if(_head.value == value){
            return true;
        }
        else {
            let before = _head;
            let nxt = _head;
            for(let i = 0; i <= _size; i++) {
                if(before.value == value){
                    return true;
                } 
                else {
                    nxt = before;
                    before = nxt.nextNode;
                }
            }
            return false;
        }
    }
    function find(value){
        if(_head.value == value){
            return 0;
        }
        else {
            let before = _head
            let nxt = _head;
            for(let i = 0; i <= _size; i++) {
                if(before.value == value){
                    return i;
                }
                nxt = before;
                before = nxt.nextNode;
            }
            return null;
        }
    }
    function toString(){
        let currentNode = _head;
        let nextNode = currentNode.nextNode;
        let outputString = "";
        while(nextNode != null)
        {
            outputString += ("( " + currentNode.value + " ) -> ");
            nextNode = currentNode.nextNode;
            currentNode = nextNode;
        }
        return outputString += nextNode;
    }
    function insertAt(value, index){
        if(index == 0){
            const tmp = newNode(value,_head);
            _head = tmp;
            _size++;
            return 'successfully inserted';
        }
        else if (index >= _size) {
            let tmp = newNode(value, null);
            _tail.nextNode = tmp;
            _tail = tmp;
            _size++;
            return 'successfully inserted';
        }
        else {
            let before = _head
            let nxt = _head;
            for(let i = 0; i < _size; i++) {
                if(i == index){
                    let tmp = newNode(value,before);
                    nxt.nextNode = tmp;
                    _size++;
                    return 'successfully inserted';
                }
                nxt = before;
                before = nxt.nextNode;
            }
        }
    }
    function removeAt(index){
        if(index == 0){
            let tmp = _head.nextNode;
            _head = tmp;
            _size--;
            return 'successfully removed';
        }
        else if (index >= _size) {
            return 'Index out of range';
        }
        else {
            let before = _head
            let nxt = _head;
            for(let i = 0; i < _size; i++) {
                if(i == index){
                    let tmp = before.nextNode;
                    nxt.nextNode = tmp;
                    _size--;
                    return 'successfully removed';
                }
                else {    
                    nxt = before;
                    before = nxt.nextNode;
                }
            }
        }
    }

    

    return {append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt};
}