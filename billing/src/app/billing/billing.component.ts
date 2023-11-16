import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {

  data = [
    { id: 1, name: 'John Doe', AccountNumber: '0771234567', status: "Success" },
    { id: 2, name: 'Jane Doe', AccountNumber: '0771255678', status: "Success" },
    { id: 3, name: 'Bob Smith', AccountNumber: '0771255679', status: "Fail" },
    // Add more data as needed
  ];

  searchText: string = '';

  get filteredData() {
    return this.data.filter(row =>
      row.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      row.AccountNumber.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
