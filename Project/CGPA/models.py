from django.db import models

# Create your models here.
class Semester(models.Model):
    SEMESTER = (
        ("FIRST_SEMESTER", "FIRST_SEMESTER"),
        ("SECOND_SEMESTER", "SECOND_SEMESTER")
    )
    name = models.CharField(max_length=15, choices=SEMESTER)
    
class Course(models.Model):
    GRADE = (
        ("A+", "A+"),
        ("A-", "A-"),
        ("B+", "B+"),
        ("B-", "B-"),
        ("C+", "C+"),
        ("C-", "C-"),
        ("D", "D"),
        ("E", "E"),
        ("F", "F")
        
    )
    
    title = models.CharField(max_length=100)
    grade = models.CharField(max_length=2, choices=GRADE)
    credits = models.IntegerField()
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, null=True)
    
    @property
    def qualify_points(self):
        if self.grade == "A+":
            self.credits=4.0
        
        elif self.grade == "A-":
            self.credits=3.7
        
        elif self.grade=="B+":
            self.credits=3.0
            
        elif self.grade=="C+":
            self.credits=2.3
        
        elif self.grade == "C":
            self.credits=2.0
        
        elif self.grade == "C-":
            self.credits = 1.7
        
        elif self.grade == "D+":
            self.credits = 1.3
        
        elif self.grade == "D":
            self.credits = 1.0
        
        elif self.grade == "E" or "F":
            self.credits = 0.0
        
    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ("semester", "id")