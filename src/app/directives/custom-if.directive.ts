import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef, ViewContainerRef
} from "@angular/core";
import {NgIf, NgIfContext} from "@angular/common";
import {ProgressSpinner} from "primeng/progressspinner";

@Directive({
  selector: '[ngIf]'
})
export class CustomIfDirective<T> implements OnChanges {
  @Input() ngIf: unknown = false;
  @Input() ngIfThen: TemplateRef<NgIfContext<T>> | null = this.templateRef;
  @Input() ngIfElse: TemplateRef<NgIfContext<T>> | null = null;

  constructor(
    private readonly directive: NgIf<T>,
    private readonly templateRef: TemplateRef<NgIfContext<T>>,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainerRef: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ngIf === null) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(ProgressSpinner);
      this.viewContainerRef.createComponent(factory);
    }
  }
}
