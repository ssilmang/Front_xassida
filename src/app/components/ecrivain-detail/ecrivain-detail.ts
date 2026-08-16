import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowLeft, BookOpen } from 'lucide-angular';
import { EcrivainWithXassidasDetail, Writer, writers, xassidas } from '../../shared/data/mockData';
import { XassidaCard} from '../xassida-card/xassida-card';
import { Biographie } from '../../services/biographie';
import { sign } from 'crypto';
import { XassidaInterface } from '../../core/models/xassida-interface';
import { environment } from '../../../environments/environment';

// import { XassidaCardComponent } from '../xassida/xassida-card.component';



@Component({
  selector: 'app-ecrivain-detail',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    XassidaCard
  ],
  templateUrl: './ecrivain-detail.html',
})
export class EcrivainDetail implements OnInit{
  readonly ArrowLeft = ArrowLeft;
  readonly BookOpen = BookOpen;
  bioService = inject(Biographie);
  environment = environment.imagesUrl

  private writerId = signal<string | null>(null);
  writerXassidas = signal<XassidaInterface[] >([]);
  writer = signal<EcrivainWithXassidasDetail >(null!);
  constructor(private route: ActivatedRoute) {
    this.writerId.set(this.route.snapshot.paramMap.get('id'));
  }

  // writer = computed<XassidaInterface | undefined>(() =>
  //   this.EcrivainXassidas()
  // );


  ngOnInit(): void {
    this.ecrivainWithXassidas();
  }

  get initial(): string {
    return this.writer()?.nom_complet?.charAt(0) ?? '';
  }
  ecrivainWithXassidas(){
     this.bioService.ecrivainDetail(this.writerId()!).subscribe((data:EcrivainWithXassidasDetail)=>{
      this.writerXassidas.set(data.xassidas);
      this.writer.set(data);
  });
  }
}
