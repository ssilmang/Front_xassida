import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./shared/layout/layout').then(m=>m.Layout),
        children:[
            {
                path:'',
                redirectTo:'accueil',
                pathMatch:'full',
            },
            {
                path:'accueil',
                loadComponent:()=>import('./components/accueil/accueil').then(m=>m.Accueil)
            },
            {
                path:'xassidas',
                loadComponent:()=>import('./components/xassida/xassida').then(m=>m.Xassida)
            },
            {
                path:'xassidas/:id',
                loadComponent:()=>import('./components/view-xassida/view-xassida').then(m=>m.ViewXassida)
            },
            {
                path:'ecrivains',
                loadComponent:()=>import('./components/ecrivain/ecrivain').then(m=>m.Ecrivain)
            }, 
            {
                path:'ecrivains/:id',
                loadComponent:()=>import('./components/ecrivain-detail/ecrivain-detail').then(m=>m.EcrivainDetail)
            },      
            {
                path:'evenements',
                loadComponent:()=>import('./components/evenement/evenement').then(m=>m.Evenement)
            }, 
            {
                path:'tarikha',
                loadComponent:()=>import('./components/tarikha/tarikha').then(m=>m.Tarikha)
            },     
            {
                path:'biographie',
                loadComponent:()=>import('./components/biographie-user/biographie-user').then(m=>m.BiographieUser)
            },
            {
                path:'viewBio/:id',
                loadComponent:()=>import('./components/view-biographie/view-biographie').then(m=>m.ViewBiographie)
            }  
                    
        ]
    },
    
];
