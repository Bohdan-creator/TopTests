﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.Services.Models.Subjects;

namespace TopTests.Services.Interfaces
{
    public interface ISubjectService
    {
        Task<RegisterSubjectDto> RegisterSubject(RegisterSubjectDto registerSubject);
        Task<EditSubjectDto> EditSubject(int id,EditSubjectDto editSubjectDto);
        Task<bool> DeleteSubject(int id);
        Task<IEnumerable<SubjectDto>> GetAllSubjects();
        Task<IEnumerable<SubjectDto>> GetAllDeletedSubjects();
        Task<SubjectDto> RestoreSubject(int id);
    }
}
