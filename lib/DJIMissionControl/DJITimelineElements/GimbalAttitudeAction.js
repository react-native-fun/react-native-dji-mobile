// @flow strict

import CustomTimelineElement from './CustomTimelineElement';

type Parameters = {
  pitch: number,
  roll: number,
  yaw: number,
  completionTime: number,
}

class GimbalAttitudeAction extends CustomTimelineElement {
  pitch: number;
  roll: number;
  yaw: number;
  completionTime: number = 1;
  gimbalMode; // TODO:

  constructor(
    parameters?: {|
      pitch?: number,
      roll?: number,
      yaw?: number,
      completionTime?: number,
    |}
  ) {
    super('GimbalAttitudeAction');

    if (parameters) {
      const {
        pitch,
        roll,
        yaw,
        completionTime,
      } = parameters;

      (pitch != null) ? this.pitch = pitch : null;
      (roll != null) ? this.roll = roll : null;
      (yaw != null) ? this.yaw = yaw : null;
      (completionTime != null) ? this.completionTime = completionTime : null;
    }

  }

  getElementParameters() {
    const {
      pitch,
      roll,
      yaw,
      completionTime,
    } = this;

    return {
      pitch,
      roll,
      yaw,
      completionTime,
    };
  }

  async checkValidity() {
    const {
      pitch,
      roll,
      yaw,
    } = this;

    // TODO: (Adam) implement these errors!
    if (pitch == null) {
      throw Error('Pitch Error');
    }

    if (roll == null) {
      throw Error('Roll Error');
    }

    if (yaw == null) {
      throw Error('Yaw Error');
    }

  }
}

export default GimbalAttitudeAction;