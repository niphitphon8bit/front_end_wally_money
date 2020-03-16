import { Injectable } from '@angular/core';

@Injectable()

export class Account {

    private ac_id;
    private ac_fname;
    private ac_lname;
    private ac_username;
    private ac_password;
    private transaction: Transaction[];

    public set_value(i,f,l,u,p){
        this.ac_id = i;
        this.ac_fname = f;
        this.ac_lname = l;
        this.ac_username = u;
        this.ac_password = p;
    }

    public get_ac_id(){
        return this.ac_id;
    }

    public get_ac_fname(){
        return this.ac_fname;
    }

    public get_ac_lname(){
        return this.ac_lname;
    }

    public get_ac_username(){
        return this.ac_username;
    }

    public get_ac_password(){
        return this.ac_password;
    }

    public add_transaction(t){
        this.transaction.push(t);
    }
    public delete_transaction(t){
        this.transaction.splice(t);
    }
    public update_transaction(t,i){
        this.transaction[i] = t;
    }

}

export abstract class Transaction {

    private ts_name: string;
    private ts_cost: string;
    private ts_date: any;
    private ts_detail: string;
    private ts_category: string;
    private ts_ac_id: any;
    private ts_type_id: any;

    public create_transaction(name, cost, date, detail, ac_id, type_id,category) {
        this.set_ts_name(name);
        this.set_ts_cost(cost);
        this.set_ts_date(date);
        this.set_ts_detail(detail);
        this.set_ts_ac_id(ac_id);
        this.set_ts_category(category);
    }

    protected set_ts_name(name) {
        this.ts_name = name;
    }

    protected set_ts_cost(cost) {
        this.ts_cost = cost;
    }

    protected set_ts_date(date) {
        this.ts_date = date;
    }

    protected set_ts_detail(detail) {
        this.ts_detail = detail;
    }

    protected set_ts_category(category) {
        this.ts_category = category;
    }

    protected set_ts_ac_id(ac_id) {
        this.ts_ac_id = ac_id;
    }

    protected set_type_id(type_id){
        this.ts_type_id = type_id;
    }

    protected abstract set_transaction_type();    

}

export class Transaction_default extends Transaction {


    public set_transaction_type() {
        return this.set_type_id(2);
    }

}

export class Transaction_entertain extends Transaction {


    public set_transaction_type(){
        return this.set_type_id(1);
    }

}

export class Transaction_food extends Transaction {


    public set_transaction_type(){
        return this.set_type_id(3);
    }

}

// export interface Transaction_type_factory {
//     create_a_transaction_type(): string;
// }

// class Transaction_type_entertain implements Transaction_type_factory {
//     public ts_type_id: any;
//     public create_a_transaction_type(): any {
//         return this.ts_type_id = 1;
//     }
// }

// class Transaction_type_food implements Transaction_type_factory {
//     public ts_type_id: any;
//     public create_a_transaction_type(): any {
//         return this.ts_type_id = 2;
//     }
// }

// class Transaction_type_default implements Transaction_type_factory {
//     public ts_type_id: any;
//     public create_a_transaction_type(): any {
//         return this.ts_type_id = 3;
//     }
// }

// function clientCode(transaction: Transaction) {
//     // ...
//     transaction.create_transaction("name","cost","date","detail","ac_id","type_id","category");
//     // ...
// }
