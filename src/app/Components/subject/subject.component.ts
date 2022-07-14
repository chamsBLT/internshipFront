import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'src/app/Models/subject.model';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  subjectsList: any;
  form: boolean = false;
  subject!: Subject;
  closeResult!: String;

  constructor(private ss: SubjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllSubjects();

    this.subject = {
      idSubject: null,
      number: null,
      title: null,
      description: null,
      startingDate: null,
      period: null,
      field: null
    }
  }

  getAllSubjects() {
    this.ss.getAllSubjects().subscribe(res => this.subjectsList = res);
  }

  addSubject(Subject: any) {
    this.ss.addSubject(Subject).subscribe(() => {
      this.getAllSubjects();
      this.form = false;
    });
  }

  editSubject(id: any, Subject: Subject) {
    this.ss.editSubject(id,Subject).subscribe();
  }

  confirmDelete(id: any , title: any) {
    if (confirm('Are you sure to delete ' + title)) {
      this.ss.deleteSubject(id).subscribe(() => this.getAllSubjects());
    }
  }

  deleteSubject(id: any) {
    this.ss.deleteSubject(id).subscribe(() => this.getAllSubjects());
  }



  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {

    if (reason == ModalDismissReasons.ESC) {
      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return `with: ${reason}`;

    }

  }

  closeForm() {
  }

  cancel() {
    this.form = false;
  }

}
