import { Component, OnInit } from '@angular/core';

//ActivatedRoute contains info about a route associated w/a component loaded in an outlet (require for dynamic routing)
// Params will help us collect parameters for use when routing
import { ActivatedRoute, Params } from '@angular/router';
// Location helps normalize URLs when traveling between routes, especially dynamic ones. (Normalizing URLs means ensuring different paths in the application all follow the same pattern consistently).
import { Location } from '@angular/common';
//Album refers to the album.model.ts that wads previously created
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {
  albumId: number;
  albumToDisplay: Album;

  //By placing an instance of ActivatedRoute and Location in constructor(), we're ensuring that any new AlbumDetailComponent instances are created with these objects available to them.
  //By including the parameters constructor(private route: ActivatedRoute, private location: Location), any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }

}
