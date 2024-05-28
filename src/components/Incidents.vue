<template>
    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="page-title">
                    <h4>Incidents</h4>
                    <h6>Manage Incident Reports</h6>
                </div>
                <div class="page-btn">
                    <a href="javascript:void(0);" class="btn btn-added" data-bs-toggle="modal" data-bs-target="#new-incident"><img src="/src/assets/img/icons/plus.svg" alt="img" class="me-1">Report New Incident</a>
                </div>
            </div>
            
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  
                    <table id="incidentTable" class="display"></table>

                </div>
              </div>
			</div>
        </div>
    </div>

</template>
    
<script>
import axios from 'axios';

export default {
  data() {
    return {
      incidents: null,
      table: null,
    };
  },
  mounted() {
    this.fetchIncidents();
  },
  methods: {
    async fetchIncidents() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/all/incidents');
        this.incidents = response.data.data;
        this.initializeDataTable();
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    },
    
    
    showAlert(incidentNo) {
      alert(incidentNo);
    },

    initializeDataTable() {
        this.table = $('#incidentTable').DataTable({
            data: this.incidents,
            columns: [
            { data: 'incident_no', title: 'Number' },
            { data: 'title', title: 'Title' },
            { data: 'property', title: 'Property' },
            { data: 'section', title: 'Section' },
            { data: 'location', title: 'Location' },
            { data: 'reported_at', title: 'Report Date' },
            {
                data: 'status',
                title: 'Status',
                render: (data, type, row) => {
                let statusClass = 'bg-lightyellow';
                if (row.status === 'CLOSED') {
                    statusClass = 'bg-lightred';
                } else if (row.status === 'OPEN') {
                    statusClass = 'bg-lightgreen';
                }
                return `<span class="badges ${statusClass}">${row.status}</span>`;
                }
            },
            {
                data: null,
                title: 'Action',
                render: (data, type, row) => {
                const incidentNo = row.incident_no;
                return `<button class="btn btn-success" data-incident-no="${incidentNo}">View</button>`;
                }
            }
            ]
        });

        $('#incidentTable tbody').on('click', 'button', (event) => {
            const incidentNo = $(event.currentTarget).data('incident-no');
            this.showAlert(incidentNo);
        });
    }
  }
}
</script>
    
    
    