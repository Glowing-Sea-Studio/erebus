import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagsInputComponent } from './tags-input.component';
import { By } from '@angular/platform-browser';

describe('TagsInputComponent', () => {
  let component: TagsInputComponent;
  let fixture: ComponentFixture<TagsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TagsInputComponent);
    component = fixture.componentInstance;
    component.tags = ['Angular'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tags correctly', () => {
    const tags = fixture.debugElement.queryAll(By.css('.erb-tags-input__tag'));
    expect(tags.length).toBe(1);
    expect(tags[0].nativeElement.textContent).toContain('Angular');
  });

  it('should remove tags', () => {
    spyOn(component.tagsChange, 'emit');
    const removeBtn = fixture.debugElement.query(By.css('.erb-tags-input__tag-remove'));
    removeBtn.nativeElement.click();
    
    expect(component.tags).toEqual([]);
    expect(component.tagsChange.emit).toHaveBeenCalledWith([]);
  });
});
