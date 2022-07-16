import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Intern } from 'src/app/Models/intern.model';
import { Subject } from 'src/app/Models/subject.model';
import { InternService } from 'src/app/Services/intern.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  internsList: any;
  subjectsList: any;
  form: boolean = false;
  intern!: Intern;
  subject!: Subject;
  closeResult!: String;

  constructor(private is: InternService, private ss: SubjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllInterns();
    this.getAllSubjects();

    this.intern = {
      idIntern: null,
      CIN: null,
      firstName: null,
      lastName: null,
      email: null,
      school: null,
      num: null
    }
  }

  getAllInterns() {
    this.is.getAllInterns().subscribe(res => this.internsList = res);
  }

  getAllSubjects() {
    this.ss.getAllSubjects().subscribe(res => this.subjectsList = res);
  }

  addIntern(Intern: any) {
    this.is.addIntern(Intern).subscribe(() => {
      this.getAllInterns();
      this.form = false;
    });
  }

  editIntern(id: any ,Intern: Intern) {
    this.is.editIntern(id, Intern).subscribe();
  }

  confirmDelete(id: any , name: any) {
    if (confirm('Are you sure to delete ' + name)) {
      this.is.deleteIntern(id).subscribe(() => this.getAllInterns());
    }
  }

  deleteIntern(id: any) {
    this.is.deleteIntern(id).subscribe(() => this.getAllInterns());
  }

  affectSubject(idi: any, ids: any) {
    this.is.affectSubject(idi, ids).subscribe(() => this.getAllInterns());
  }

  unaffectSubject(idi: any) {
    this.is.unaffectSubject(idi).subscribe(() => this.getAllInterns());
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
