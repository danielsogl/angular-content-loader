import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-loader',
  templateUrl: './content-loader.component.html'
})
export class ContentLoaderComponent {
  /** false to render with no animation */
  @Input() animate = true;
  /** Classname in the <svg/> */
  @Input() className = '';
  /** viewBox width of <svg/> */
  @Input() width = 400;
  /** viewBox height of <svg/> */
  @Input() height = 130;
  /** Animation speed in seconds */
  @Input() speed = 2;
  /** Aspect ratio option of <svg/> */
  @Input() preserveAspectRatio = 'xMidYMid meet';
  /** Background */
  @Input() primaryColor = '#f9f9f9';
  /** Animation color */
  @Input() secondaryColor = '#ecebeb';
  /** Background opacity (0 = transparent, 1 = opaque) */
  @Input() primaryOpacity = 1;
  /** Animation opacity (0 = transparent, 1 = opaque) */
  @Input() secondaryOpacity = 1;
  /** Ex: { width: '100%', height: '70px' } */
  @Input() style: { width: string, height: string };
  /** Use the same value of prop key, that will solve inconsistency on the SSR. */
  @Input() uniqueKey;
  /** Unique Clip id */
  public idClip = uid();
  /** Unique gradient id */
  public idGradient = uid();
}

/**
 * Generates random UID
 * @returns {string} random UID
 */
function uid(): string {
  return Math.random()
    .toString(36)
    .substring(2);
}
