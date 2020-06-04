import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
//import { emit } from 'cluster';


@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private usersub : Subscription;
    constructor(private datastorageservice : DataStorageService, 
        private authservice : AuthService){}

    ngOnInit()
    {
       this.usersub =  this.authservice.user.subscribe(user => {
        this.isAuthenticated = !user ? false : true;
       });
    }
    onsavedata(){
        this.datastorageservice.storeRecipes();
    }
    onFetchData()
    {
        this.datastorageservice.getchRecipes().subscribe();
    }
    onLogout(){
        this.authservice.logout();
    }
    ngOnDestroy(){
        this.usersub.unsubscribe();
    }
}