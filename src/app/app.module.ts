import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { AddRepositoryComponent } from './repositories/add-repository/add-repository.component';
import { EditRepositoryComponent } from './repositories/edit-repository/edit-repository.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { ProjectAuctionComponent } from './auctions/project-auction/project-auction.component';
import { CallbackComponent } from './login/callback/callback.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoadingComponent } from './loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserShowComponent } from './user-show/user-show.component';
import { ContributionsComponent } from './table/contributions/contributions.component';
import { TransactionsComponent } from './table/transactions/transactions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RepositoriesComponent,
        AddRepositoryComponent,
        EditRepositoryComponent,
        AuctionsComponent,
        ProjectAuctionComponent,
        UsersComponent,
        CallbackComponent,
        SidebarComponent,
        LoadingComponent,
        UserShowComponent,
        ContributionsComponent,
        TransactionsComponent,
        HeaderComponent,
        FooterComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        NgbModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
