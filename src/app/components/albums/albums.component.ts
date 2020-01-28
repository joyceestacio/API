import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums;

  constructor(private photosService: ServiceService) { }

  ngOnInit() {
    this.albums = this.photosService.getAlbums();
  }

}
