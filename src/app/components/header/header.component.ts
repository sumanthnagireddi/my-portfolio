import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], standalone:true,imports:[NgIf]
})
export class HeaderComponent {

  openMenu:boolean=false
  downloadPdf(): void {
    const pdfUrl = '/assets/resume.pdf'; // Update with the actual path
    this.downloadFile(pdfUrl, 'sumanth_resume.pdf');
  }
  downloadFile(fileUrl: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
  toggleMenu(){
    this.openMenu=!this.openMenu
  }
}
