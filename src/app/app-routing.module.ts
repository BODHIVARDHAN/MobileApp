import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'select-image',
  //   loadChildren: () => import('./select-image/select-image.module').then( m => m.SelectImagePageModule)
  // },
  // {
  //   path: 'show-image',
  //   loadChildren: () => import('./show-image/show-image.module').then( m => m.ShowImagePageModule)
  // },
  // {
  //   path: 'image-of-day',
  //   loadChildren: () => import('./image-of-day/image-of-day.module').then( m => m.ImageOfDayPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'photo-discription',
  //   loadChildren: () => import('./photo-discription/photo-discription.module').then( m => m.PhotoDiscriptionPageModule)
  // },
  {
    path: 'user-ranking',
    loadChildren: () => import('./user-ranking/user-ranking.module').then( m => m.UserRankingPageModule)
  },
  // {
  //   path: 'show-big-photo',
  //   loadChildren: () => import('./show-big-photo/show-big-photo.module').then( m => m.ShowBigPhotoPageModule)
  // },
  // {
  //   path: 'user-photo-details',
  //   loadChildren: () => import('./user-photo-details/user-photo-details.module').then( m => m.UserPhotoDetailsPageModule)
  // },
  // {
  //   path: 'show-categories',
  //   loadChildren: () => import('./show-categories/show-categories.module').then( m => m.ShowCategoriesPageModule)
  // },
  // {
  //   path: 'my-stats',
  //   loadChildren: () => import('./my-stats/my-stats.module').then( m => m.MyStatsPageModule)
  // },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  // {
  //   path: 'buy-subcription',
  //   loadChildren: () => import('./buy-subcription/buy-subcription.module').then( m => m.BuySubcriptionPageModule)
  // },
  // {
  //   path: 'photo-of-day',
  //   loadChildren: () => import('./photo-of-day/photo-of-day.module').then( m => m.PhotoOfDayPageModule)
  // },
  // {
  //   path: 'coment-popup',
  //   loadChildren: () => import('./coment-popup/coment-popup.module').then( m => m.ComentPopupPageModule)
  // },
  // {
  //   path: 'most-liked-photo',
  //   loadChildren: () => import('./most-liked-photo/most-liked-photo.module').then( m => m.MostLikedPhotoPageModule)
  // },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'search-filter',
    loadChildren: () => import('./search-filter/search-filter.module').then( m => m.SearchFilterPageModule)
  },
  {
    path: 'player-details',
    loadChildren: () => import('./player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
  {
    path: 'my-posts',
    loadChildren: () => import('./my-posts/my-posts.module').then( m => m.MyPostsPageModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./create-post/create-post.module').then( m => m.CreatePostPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
