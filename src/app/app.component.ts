import { Component, OnInit } from '@angular/core';
import { PaletteModel, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { CommonModule } from '@angular/common';
import { DiagramModule, SymbolPaletteAllModule } from '@syncfusion/ej2-angular-diagrams';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DiagramModule, SymbolPaletteAllModule]
})
export class AppComponent implements OnInit {
  public palettes!: PaletteModel[];
  public nodes: NodeModel[] = [];
  public title = 'syncfusion-angular-app';

  ngOnInit(): void {
    this.palettes = [
      {
        id: 'basic',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Basic Shapes'
      },
      {
        id: 'customShapes',
        expanded: true,
        symbols: this.getCustomNodes(),
        title: 'Custom Shapes'
      }
    ];
  }

  getBasicShapes(): NodeModel[] {
    return [
      { id: 'rectangle', shape: { type: 'Basic', shape: 'Rectangle' }, width: 70, height: 70, style: { strokeColor: '#000000', strokeWidth: 2 } },
      { id: 'ellipse', shape: { type: 'Basic', shape: 'Ellipse' }, width: 70, height: 70, style: { strokeColor: '#000000', strokeWidth: 2 } },
      
    ];
  }

  getCustomNodes(): NodeModel[] {
    return [
      this.getHeaderShape(),
      this.getDiagramNotesShape(),
      this.getContainerClusterShape(),
      this.getContainerWorkloadShape(),
      this.getDatabaseServerShape()
    ];
  }
  getHeaderShape(): NodeModel {
    return {
      id: 'header',
      shape: { type: 'HTML', content: this.getHeaderContent() },
      width: 400,
      height: 100,
      offsetX: 200,
      offsetY: 50,
      style: {
        fill: '#f0f0f0',
        strokeColor: '#000000',
        strokeWidth: 1
      }
    };
  }

  getDiagramNotesShape(): NodeModel {
    return {
      id: 'diagramNotes',
      shape: { type: 'HTML', content: this.getDiagramNotesContent() },
      width: 100,
      height: 170,
      offsetX: 75,
      offsetY: 50,
      style: { fill: '#f8f8f8', strokeColor: '#000000', strokeWidth: 2 },
      borderColor: 'black',
      borderWidth: 2
      // annotations: [{ content: 'Diagram notes', style: { color: 'black', fontSize: 14 } }]
    };
  }

  getContainerClusterShape(): NodeModel {
    return {
      id: 'containerCluster',
      shape: { type: 'Basic', shape: 'Rectangle' },
      width: 300,
      height: 150,
      offsetX: 150,
      offsetY: 75,
      style: { 
        gradient: {
          type: 'Linear',
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 1,
          stops: [
            { color: '#cceeff', offset: 0 },
            { color: '#0099ff', offset: 1 }]
        },
         strokeColor: '#000000', strokeWidth: 2 },
      annotations: [
        { content: 'Cluster: <Cluster>', offset: { x: 0.05, y: 0.1 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Location: <Location>', offset: { x: 0.05, y: 0.2 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Namespace: <Namespace>', offset: { x: 0.05, y: 0.3 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Namespace Label: <Namespace Label>', offset: { x: 0.05, y: 0.4 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Quota Size: <Quota Size>', offset: { x: 0.05, y: 0.5 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Cores: <Cores>', offset: { x: 0.05, y: 0.6 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Memory: <Memory>', offset: { x: 0.05, y: 0.7 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } }
      ]
    };
  }

  getContainerWorkloadShape(): NodeModel {
    return {
      id: 'containerWorkload',
      shape: { type: 'Basic', content: 'Rectangle' },
      width: 300,
      height: 150,
      offsetX: 150,
      offsetY: 75,
      style: {
        gradient: {
          type: 'Linear',
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 1,
          stops: [
            { color: '#ccffcc', offset: 0 },
            { color: '#00ff00', offset: 1 }
          ]
        },
        strokeColor: '#000000',
        strokeWidth: 2
      },
      annotations: [
        { content: 'Workload Name: <Workload Name>', offset: { x: 0.05, y: 0.1 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Description: <Workload Description>', offset: { x: 0.05, y: 0.2 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'URL: <Workload URL>', offset: { x: 0.05, y: 0.3 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Ports: <Workload Ports>', offset: { x: 0.05, y: 0.4 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Autoscale: <Autoscale On/Off>', offset: { x: 0.05, y: 0.5 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } }
      ]
    }
  }
  getDatabaseServerShape(): NodeModel {
    return {
      id: 'databaseServer',
      shape: { type: 'Basic', shape: 'Rectangle' },
      width: 200,
      height: 300,
      offsetX: 100,
      offsetY: 150,
      style: {
        gradient: {
          type: 'Linear',
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 1,
          stops: [
            { color: '#ffcccc', offset: 0 },
            { color: '#ff6666', offset: 1 }
          ]
        },
        strokeColor: '#000000',
        strokeWidth: 2
      },
      annotations: [
        { content: 'Server Function?', offset: { x: 0.05, y: 0.1 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Archetype?', offset: { x: 0.05, y: 0.2 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Server Type?', offset: { x: 0.05, y: 0.3 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Server Model?', offset: { x: 0.05, y: 0.4 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Server OS?', offset: { x: 0.05, y: 0.5 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Primary Software?', offset: { x: 0.05, y: 0.6 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: 'Backup Type?', offset: { x: 0.05, y: 0.7 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } },
        { content: '0 CPU x 0 GB RAM', offset: { x: 0.05, y: 0.8 }, horizontalAlignment: 'Left', verticalAlignment: 'Top', style: { color: 'black', fontSize: 14 } }
      ]
    };
  }

  getHeaderContent(): string {
    return `<div style="padding: 10px; border: 1px solid black;">
              <div style="font-weight: bold;">Project Name: <span>New Project</span></div>
              AIT: 12345 | RTO: Tier 1 | RPO: Tier 1 | UCAL: Yes
              <div>Author: &lt;Author Name&gt; | Document Name: DesignTemplate_v2.6.vsdx</div>
              <div>Title: Application Interaction (Workflow)</div>
              <div>Last Saved Date: 6/21/2024 11:41:53 AM | Version: 1.0</div>
            </div>`;
  }

  getDiagramNotesContent(): string {
    return `<div style="padding: 10px; text-align: center; border: 1px solid black;">
              Diagram notes
            </div>`;
  }

  getContainerClusterContent(): string {
    return `<div style="padding: 10px; text-align: left; border: 1px solid black;">
              Cluster: &lt;Cluster&gt;<br>
              Location: &lt;Location&gt;<br>
              Namespace: &lt;Namespace&gt;<br>
              Namespace Label: &lt;Namespace Label&gt;<br>
              Quota Size: &lt;Quota Size&gt;<br>
              Cores: &lt;Cores&gt;<br>
              Memory: &lt;Memory&gt;
            </div>`;
  }
  
}
