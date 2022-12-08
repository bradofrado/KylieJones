import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleButtonState } from './toggle-button-state';

@Component({
  selector: '[toggle-button-group], toggle-button-group',
  templateUrl: './toggle-button-group.component.html',
  styleUrls: ['./toggle-button-group.component.css']
})
export class ToggleButtonGroupComponent {
    @Input() states: ToggleButtonState[] = [];
    @Output() change: EventEmitter<ToggleButtonState> = new EventEmitter<ToggleButtonState>();
    
    onToggleClick(state: ToggleButtonState) {
        this.states.forEach(_state => {
            if (_state == state) {
                _state.state = true;
            } else {
                _state.state = false;
            }
        });

        this.change.emit(state);
    }
}
