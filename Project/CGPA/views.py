from django.shortcuts import render
from .models import Course, Semester
from django.http import HttpResponse

# Create your views here.
app_name = "CGPA"

def index(request):
    courses = Course.objects.all()
    semester = Semester.objects.all()
    context = {
        "course": courses,
    }
    if request.method == "POST":
        title = request.POST.get('title'),
        grade = request.POST.get('grade')
        credit = request.POST.get('credit')
        semester_id = request.POST.get('semester')
        
        course = Course(
            title=title,
            grade=grade,
            credits=credit,
            semester_id=semester_id
        )
        course.save()
        return HttpResponse('Course Added successfully')

    semesters = Semester.objects.all()
    data = {
        'semesters': semesters,
    }
    return render(request, "index.html", data)
