import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): unknown {
    if(!images){
      return 'assets/img/noimage.png';  
    }
    else if(images.length>0){
      return images[0].url;
    }
    return 'assets/img/noimage.png';
  }

}
